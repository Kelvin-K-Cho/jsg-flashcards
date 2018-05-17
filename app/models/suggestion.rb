# == Schema Information
#
# Table name: suggestions
#
#  id         :integer          not null, primary key
#  comments   :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Suggestion < ApplicationRecord

  validates :comments, presence: true

end
