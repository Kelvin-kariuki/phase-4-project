class TenderSerializer < ActiveModel::Serializer
  attributes :id, :title, :user_id, :minutes_to_complete, :instructions
end
