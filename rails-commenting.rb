# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) The Controller that gets information from the BlogPost model.
class BlogPostsController < ApplicationController
  def index
    # ---2) Instance variable that is assigned an active record query that shows all rows in the BlogPost model database.
    @posts = BlogPost.all
  end

  def show
    # ---3) Instance variable that is assigned an active record query that shows the row in the BlogPost model database with the given id. 
    @post = BlogPost.find(params[:id])
  end

  # ---4) New Controller Method will create a new object in the database.
  def new
    @post = Post.new
  end

  def create
    # ---5) Create will input the given data to the new object in the database. It is passed strong params, which are specific parameters that are set to be allowed to be added to the new object using the method under the private method.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  # ---6) Will show the BlogPost row with the given parameter in order to edit.
  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) Update will update the attributes of the object with the given strong params, which are set under the private method.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) If the destroy method does not destroy the object given, it will redirect to the show page of the object you tried to delete.
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) Private is where you set the strong parameters. The methods under the private keyword will only be available to be called within the controller.
  private
  def blog_post_params
    # ---10) Permits the use of the title and content attributes to be passed as strong parameters.
    params.require(:blog_post).permit(:title, :content)
  end
end
