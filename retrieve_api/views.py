from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import PlayerSerializer
from .models import Player

# Create your views here.

@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        'Download Score':'download_score/',
        'Upload Score':'upload_score/',
    }

    return Response(api_urls)



@api_view(['GET'])
def download_score(request):

    player = Player.objects.last()
    serializer = PlayerSerializer(player, many=False)

    return Response(serializer.data)

@api_view(['POST'])
def upload_score(request):

    serializer = PlayerSerializer(data=request.data)
    
    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

