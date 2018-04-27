# == Schema Information
#
# Table name: dailies
#
#  id         :integer          not null, primary key
#  title      :string
#  topic_id   :integer          not null
#  day_id     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Daily < ApplicationRecord

  validates :deck_id, :day_id, presence: true

  belongs_to :topic,
    primary_key: :id,
    foreign_key: :topic_id,
    class_name: :Topic

  belongs_to :day,
    primary_key: :id,
    foreign_key: :day_id,
    class_name: :Day

end
