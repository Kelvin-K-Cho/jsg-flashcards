# == Schema Information
#
# Table name: days
#
#  id         :integer          not null, primary key
#  title      :string
#  week_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Day < ApplicationRecord
  belongs_to :week,
    primary_key: :id,
    foreign_key: :week_id,
    class_name: :Week

  has_many :topics,
    primary_key: :id,
    foreign_key: :day_id,
    class_name: :Topic

  has_many :decks,
    through: :topics,
    source: :deck
end
