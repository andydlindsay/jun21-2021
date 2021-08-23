class LocationsController < ApplicationController
  def index
    @planet = Planet.find(params[:planet_id])
    @locations = @planet.locations
  end
end
