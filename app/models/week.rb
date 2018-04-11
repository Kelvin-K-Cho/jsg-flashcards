# == Schema Information
#
# Table name: weeks
#
#  id         :integer          not null, primary key
#  title      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Week < ApplicationRecord
  has_many :days,
    primary_key: :id,
    foreign_key: :week_id,
    class_name: :Day

  has_many :topics,
    through: :days,
    source: :topics

  has_many :decks,
    through: :topics,
    source: :deck
end
