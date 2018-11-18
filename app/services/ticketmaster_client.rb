class TicketmasterClient

  def initialize(city, user, term="")
    @city, @user, @term = city, user, term
  end

  def get_events
    @user.bands.each do |band|
      response = TicketmasterApiCall.call(band.name, @city)
      # bands = Band.find_by(name: band.name)
      if response.has_key?("_embedded")
        response['_embedded']['events'].each do |event|
          name = event['name']
          date = event['dates']['start']['localDate']
          location = event['_embedded']['venues'][0]['address']['line1'] + ', ' + event['_embedded']['venues'][0]['postalCode']
          event_url = event['url']
          img_url = event['images'][0]['url']
          band.concerts.find_or_create_by(name: name, date: date, location: location, url: event_url, imgurl: img_url)
        end
      end
    end
  end

  def search_events
    output = []
    response = TicketmasterApiCall.call(@term, @city)

    if response.has_key?("_embedded")
      response['_embedded']['events'].each do |event|
        name = event['name']
        date = event['dates']['start']['localDate']
        location = event['_embedded']['venues'][0]['address']['line1'] + ', ' + event['_embedded']['venues'][0]['postalCode']
        event_url = event['url']
        img_url = event['images'][0]['url']

        output.push(Concert.find_or_create_by(name: name, date: date, location: location, url: event_url, imgurl: img_url))
      end
    end
    output
  end
end
