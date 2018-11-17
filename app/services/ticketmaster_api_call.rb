module TicketmasterApiCall
  class << self
    def call(band, city)
      url = "https://app.ticketmaster.com/discovery/v2/events.json?"
      url += "apikey=#{ENV['TICKETMASTER_API_KEY']}"
      url += "&keyword=#{band}"
      url += "&city=#{city}"
      
      begin
        uri = URI.parse(url)
      rescue URI::InvalidURIError
        uri = URI.parse(URI.escape(url))
      end
      
      response = JSON.parse(HTTParty.get(uri).body)
    end
  end
end
