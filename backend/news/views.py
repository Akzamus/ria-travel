from rest_framework import viewsets

from .models import Post
from .serializers import PostSerializer, PostListSerializer


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
