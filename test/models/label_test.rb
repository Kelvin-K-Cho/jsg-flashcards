# == Schema Information
#
# Table name: labels
#
#  id         :integer          not null, primary key
#  subject_id :integer          not null
#  image_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class LabelTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
