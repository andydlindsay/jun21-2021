class BooksController < ApplicationController
  def index
    # @books = Book.all
    @author = Author.find(params[:author_id])
    @books = @author.books
  end
end
