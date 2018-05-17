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

require 'test_helper'

class DayTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
