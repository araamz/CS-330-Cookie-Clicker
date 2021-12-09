from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import PlayerSerializer
from .models import Player

# Create your views here.

@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        'Get Passengers':'passenger-details/',
        'Get Passenger Tickets':'passenger-tickets/<str:full_name>/tickets/',
        'Get Passenger Tikcet':'passenger-tickets/<str:full_name>/<str:confirmation_number>',
        'Check In Passenger Ticket':'passenger-tickets/<str:full_name>/<str:confirmation_number>/check-in/'
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

