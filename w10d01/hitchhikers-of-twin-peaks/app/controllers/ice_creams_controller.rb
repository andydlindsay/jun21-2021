class IceCreamsController < ApplicationController
  before_action :set_ice_cream, only: %i[ show edit update destroy ]

  # GET /ice_creams or /ice_creams.json
  def index
    @ice_creams = IceCream.all
  end

  # GET /ice_creams/1 or /ice_creams/1.json
  def show
  end

  # GET /ice_creams/new
  def new
    @ice_cream = IceCream.new
  end

  # GET /ice_creams/1/edit
  def edit
  end

  # POST /ice_creams or /ice_creams.json
  def create
    @ice_cream = IceCream.new(ice_cream_params)

    respond_to do |format|
      if @ice_cream.save
        format.html { redirect_to @ice_cream, notice: "Ice cream was successfully created." }
        format.json { render :show, status: :created, location: @ice_cream }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @ice_cream.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /ice_creams/1 or /ice_creams/1.json
  def update
    respond_to do |format|
      if @ice_cream.update(ice_cream_params)
        format.html { redirect_to @ice_cream, notice: "Ice cream was successfully updated." }
        format.json { render :show, status: :ok, location: @ice_cream }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @ice_cream.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /ice_creams/1 or /ice_creams/1.json
  def destroy
    @ice_cream.destroy
    respond_to do |format|
      format.html { redirect_to ice_creams_url, notice: "Ice cream was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_ice_cream
      @ice_cream = IceCream.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def ice_cream_params
      params.fetch(:ice_cream, {})
    end
end
