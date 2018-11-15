class TicketmasterClient

  def initialize(zip, band_name)
    @zip, @band_name = zip, band_name
  end

  def get_events
    url = "https://app.ticketmaster.com/discovery/v2/events.json?"
    url += "apikey=#{ENV['TICKETMASTER_API_KEY']}"
    url += "&keyword=#{@band_name}"
    url += "&postalCode=#{@zip}&radius=100"
    ap JSON.parse(HTTParty.get(url).body)
  end

end
