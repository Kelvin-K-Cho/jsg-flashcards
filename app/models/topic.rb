# == Schema Information
#
# Table name: topics
#
#  id         :integer          not null, primary key
#  title      :string
#  day_id     :integer          not null
#  deck_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Topic < ApplicationRecord
  belongs_to :deck,
    primary_key: :id,
    foreign_key: :deck_id,
    class_name: :Deck

  belongs_to :day,
    primary_key: :id,
    foreign_key: :day_id,
    class_name: :Day
end
