# A controller to handle rendering a static page to serve as the root to all my components..
class StaticPagesController < ApplicationController

  # Define the root function to implicitly return "render :root"
  def root
  end

end
