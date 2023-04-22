import telebot
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST

from .serializers import ContactFormSerializer
from .telegram_bot import bot
from rest_framework.views import APIView
from rest_framework.response import Response


class ContactFormView(APIView):
    serializer_class = ContactFormSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)

        name = serializer.validated_data['name']
        phone = serializer.validated_data['phone']
        country = serializer.validated_data['country']

        message = f'Новая заявка!\n\n' \
                  f'Имя: {name}\n' \
                  f'Телефон: {phone}\n' \
                  f'Страна: {country}\n'

        bot.send_message(chat_id='880532181', text=message)

        return Response({'success': True})


@require_POST
@csrf_exempt
def tg_webhook(request):
    try:
        update = telebot.types.Update.de_json(request.body.decode())
        bot.process_new_updates([update])
        return HttpResponse(status=200)
    except Exception as e:
        return HttpResponse(status=400)
