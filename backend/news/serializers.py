from rest_framework import serializers

from .models import Post, PopularPlace


class PostSerializer(serializers.ModelSerializer):
    mainText = serializers.CharField(source='main_text')

    class Meta:
        model = Post
        fields = ['title', 'photo', 'mainText']


class PostListSerializer(serializers.ModelSerializer):
    previewText = serializers.CharField(source='preview_text')

    class Meta:
        model = Post
        fields = ['id', 'title', 'photo', 'previewText']


class PopularPlaceListSerializer(serializers.ModelSerializer):
    class Meta:
        model = PopularPlace
        fields = ['id', 'title', 'photo']
