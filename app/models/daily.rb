# == Schema Information
#
# Table name: dailies
#
#  id         :integer          not null, primary key
#  title      :string
#  deck_id    :integer          not null
#  day_id     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Daily < ApplicationRecord
  validates :deck_id, :day_id, presence: true

  belongs_to :deck,
    primary_key: :id,
    foreign_key: :deck_id,
    class_name: :Deck

  belongs_to :day,
    primary_key: :id,
    foreign_key: :day_id,
    class_name: :Day
end
