class Tender < ApplicationRecord
    belongs_to :user

    validates :title, presence: true
    validates :instructions, length: { minimum: 100}
end
