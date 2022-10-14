class Tender < ApplicationRecord
    

    validates :name, presence: true
    validates :cost, numericality: { only_integer: true }
    validates :description, length: { minimum: 10}
end
