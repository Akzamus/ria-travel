import telebot
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST
from rest_framework.response import Response
from rest_framework.views import APIView
from telebot.apihelper import ApiException
from .models import TelegramChat
from .serializers import ContactFormSerializer
from .telegram_bot import bot


class ContactFormView(APIView):
    serializer_class = ContactFormSerializer
    permission_classes = ()
    authentication_classes = ()

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        data = serializer.validated_data

        message = f'Новая заявка!\n\n' \
                  f'Имя: {data["name"]}\n' \
                  f'Телефон: {data["phone"]}\n' \
                  f'Страна: {data["country"]}\n'

        chats = TelegramChat.objects.values_list('chat_id', flat=True)

        for chat in chats:
            try:
                bot.send_message(
                    chat_id=chat,
                    text=message
                )
            except (ApiException, ConnectionError):
                return HttpResponse(status=400)

        return Response({'success': True})


@require_POST
@csrf_exempt
def tg_webhook(request):
    try:
        update = telebot.types.Update.de_json(request.body.decode())
        bot.process_new_updates([update])
        return HttpResponse(status=200)
    except Exception:
        return HttpResponse(status=400)
