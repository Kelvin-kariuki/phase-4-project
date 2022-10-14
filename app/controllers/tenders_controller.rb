class TendersController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_error
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

 before_action :authorize

    def index
       render json: Tender.all,status: :ok
    end 

   

    def show
        tender= find_tender
        render json: tender, status: :ok
    end

     def update
        tender = find_tender
        Tender.update!(tender_params)
        render json: tender
    end


    def create
        tender= Tender.create!(tender_params)
        render json: tender, status: :created
    end


    def destroy
        tender = find_tender
        Tender.destroy
        head :no_content
    end

    private

    def render_error
        render json: { error: "tender not found" }, status: :not_found
     end
    
    def find_tender
         Tender.find(params[:id])
    end
    
    def tender_params
        params.permit(:name, :serial, :description, :cost)
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def authorize
    return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
  end