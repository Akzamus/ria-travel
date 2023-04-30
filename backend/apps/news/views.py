from rest_framework import viewsets

from .models import Post, PopularPlace
from .serializers import PostSerializer, PostListSerializer, PopularPlaceListSerializer


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    http_method_names = ['get']

    def get_serializer_class(self):
        if self.action == 'list':
            return PostListSerializer
        elif self.action == 'retrieve':
            return PostSerializer

    def get_queryset(self):
        post_id = self.kwargs.get('pk')

        if post_id:
            return Post.objects.filter(id=post_id)
        
        return Post.objects.order_by('-created_at')[:8]


class PopularPlaceViewSet(viewsets.ModelViewSet):
    queryset = PopularPlace.objects.all()
    serializer_class = PopularPlaceListSerializer
    http_method_names = ['get']

    def get_queryset(self):
        popular_place_id = self.kwargs.get('pk')

        if popular_place_id:
            return Post.objects.filter(id=popular_place_id)

        return PopularPlace.objects.filter(is_displayed=True)
