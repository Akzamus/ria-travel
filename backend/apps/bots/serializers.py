from rest_framework import serializers
import regex


class ContactFormSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=100)
    phone = serializers.CharField(max_length=20)
    country = serializers.CharField(max_length=100)
    permission = serializers.BooleanField()

    def validate_name(self, value):
        if not regex.match(r'^[\p{L}\s\'-]+$', value):
            raise serializers.ValidationError('Имя может содержать только буквы, апостроф, пробел и дефис')
        return value

    def validate_phone(self, value):
        if not regex.match(r'^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$', value):
            raise serializers.ValidationError('Пожалуйста, введите корректный номер телефона')
        return value

    def validate_country(self, value):
        if not regex.match(r'^[\p{L}\s\'-]+$', value):
            raise serializers.ValidationError('Название страны может содержать только буквы, апостроф, пробел и дефис')
        return value

    def validate_permission(self, value):
        if not value:
            raise serializers.ValidationError('Поле "permission" должно быть "True"')
        return value

    def validate(self, data):
        if not all(data.values()):
            raise serializers.ValidationError('Все поля обязательны для заполнения')
        return data