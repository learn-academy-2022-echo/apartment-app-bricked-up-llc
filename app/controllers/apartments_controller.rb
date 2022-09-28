class ApartmentsController < ApplicationController

    def index
        apartments = Aparments.all
        render json: apartments
    end
end
