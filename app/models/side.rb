# == Schema Information
#
# Table name: sides
#
#  id         :integer          not null, primary key
#  answer     :text             not null
#  correct    :boolean          default(FALSE), not null
#  card_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Side < ApplicationRecord
  validates :answer, :card_id, presence: true
  validates :correct, presence: true, inclusion: { in: [true, false] }

  belongs_to :question,
    primary_key: :id,
    foreign_key: :card_id,
    class_name: :Card,
    inverse_of: :answers

  has_one :topic,
    through: :question,
    source: :deck

end
