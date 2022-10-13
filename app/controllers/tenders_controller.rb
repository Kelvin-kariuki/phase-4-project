class TendersController < ApplicationController
    before_action :authorize

  def index
    tenders = Tender.all
    render json: tenders, status: :created
  end

  def create
    user = User.find_by(id: session[:user_id])
    tender = user.tenders.create(tender_params)
    if tender.valid?
      tender.save
      render json: tender, status: :created
    else
      render json: {errors: tender.errors.full_messages}, status: :unprocessable_entity
    end
  end

  private

  def authorize
    return render json: { errors: ["Not authorized"] }, status: :unauthorized unless session.include? :user_id
  end

  def tender_params
    params.permit(:title, :instructions, :minutes_to_complete, :user_id)
  end
end

