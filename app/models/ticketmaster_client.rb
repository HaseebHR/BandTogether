class TicketmasterClient

  def initialize(city, band_name, user)
    @city, @band_name, @user = city, band_name, user
  end

  def get_events
    url = "https://app.ticketmaster.com/discovery/v2/events.json?"
    url += "apikey=#{ENV['TICKETMASTER_API_KEY']}"
    url += "&keyword=#{@band_name.name}"
    url += "&city=#{@city}"
    
    begin
      uri = URI.parse(url)
    rescue URI::InvalidURIError
      uri = URI.parse(URI.escape(url))
    end
    
    response = JSON.parse(HTTParty.get(uri).body)
    byebug
    if response.has_key?("_embedded") 
      response['_embedded']['events']&.each do |event|
        name = event['name'] 
        date = event['dates']['start']['localDate'] 
        location = event['_embedded']['venues'][0]['address']['line1'] + ', ' + event['_embedded']['venues'][0]['postalCode']
        event_url = event['url']
        img_url = event['images'][0]['url']
        band = Band.find_by(name: @band_name)
        @user.bands.each do |band| 
          band.concerts.find_or_create_by(name: name, date: date, location: location, url: event_url, imgurl: img_url)
        end
      end
    end
  end
end
