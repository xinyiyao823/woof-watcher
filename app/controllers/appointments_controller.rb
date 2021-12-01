class AppointmentsController < ApplicationController
    def index 
        appointments = Appointment.all
        render json: appointments, include: ['sitter'], status: :ok
    end

    def create 
        appointment = Appointment.create(appointment_params)
        if appointment.valid?
            render json: appointment, status: :created
        else
            render json: { errors: appointment.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy 
        appointment = Appointment.find(params[:id])
        appointment.destroy
        head :no_content
    end

    private 

    def appointment_params
        params.permit(:date, :user_id, :sitter_id)
    end
end
