import telebot
from backend.settings import TG_BOT_TOKEN, TG_WEBHOOK

bot = telebot.TeleBot(TG_BOT_TOKEN)
bot.remove_webhook()
bot.set_webhook(url=TG_WEBHOOK)


@bot.message_handler(commands=['start'])
def start(message):
    chat_id = message.chat.id
    bot.send_message(
        chat_id=chat_id,
        text=f'ID вашего чата: {chat_id}'
    )
