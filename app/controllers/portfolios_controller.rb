# frozen_string_literal: true

class PortfoliosController < ApplicationController
  before_action :set_portfolio, only: %i[show update destroy]

  # GET /portfolios
  def index
    @portfolios = Portfolio.all

    render json: @portfolios
  end

  # GET /portfolios/1
  def show
    render json: @portfolio
  end

  # POST /portfolios
  def create
    @portfolio = Portfolio.new(portfolio_params)

    if @portfolio.save
      render json: @portfolio, status: :created, location: @portfolio
    else
      render json: @portfolio.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /portfolios/1
  def update
    if @portfolio.update(portfolio_params)
      render json: @portfolio
    else
      render json: @portfolio.errors, status: :unprocessable_entity
    end
  end

  # DELETE /portfolios/1
  def destroy
    @portfolio.destroy
  end

  def port_to_security
    @port = Portfolio.find(params[:portfolio_id])
    @security = Security.find(params[:id])

    @food.flavors << @flavor
    # @flavor.foods.push(@food)
    render json: @food, include: :flavors
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_portfolio
    @portfolio = Portfolio.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def portfolio_params
    params.require(:portfolio).permit(:name, :user_id)
  end
end
