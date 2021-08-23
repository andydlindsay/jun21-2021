require "application_system_test_case"

class IceCreamsTest < ApplicationSystemTestCase
  setup do
    @ice_cream = ice_creams(:one)
  end

  test "visiting the index" do
    visit ice_creams_url
    assert_selector "h1", text: "Ice Creams"
  end

  test "creating a Ice cream" do
    visit ice_creams_url
    click_on "New Ice Cream"

    click_on "Create Ice cream"

    assert_text "Ice cream was successfully created"
    click_on "Back"
  end

  test "updating a Ice cream" do
    visit ice_creams_url
    click_on "Edit", match: :first

    click_on "Update Ice cream"

    assert_text "Ice cream was successfully updated"
    click_on "Back"
  end

  test "destroying a Ice cream" do
    visit ice_creams_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Ice cream was successfully destroyed"
  end
end
