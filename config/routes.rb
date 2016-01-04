Rails.application.routes.draw do

  ###### Application Controller #########
  get 'application/index'
  get "/administration" => 'application#administration'
  get "/reports" => 'application#reports'
  get "/translate" => 'application#translate'

  ###### User Controller #########
  get "/username_availability" => "users#username_availability"
  get "/login" => "users#login"
  post "/login" => "users#login"
  get '/logout' => "users#logout"
  post "/users/update_user"
  get "/query_users" => "users#query"

  ###### Patient Controller #########
  get "/search_first_name" => "patients#first_names"
  get "/search_last_name" => "patients#last_names"
  get "/print_barcode" => "patients#print_patient_barcode"
  get "patients/print_patient_barcode"
  get "/regions" => "patients#region"
  get "/provinces" => "patients#province"
  get "/barrios" => "patients#barrios"
  get "/search_by_patient_id" => "patients#find_by_npid"
  get "/search_by_name" => "patients#find_by_name"
  get "/summary" => 'patients#summary'
  get "/demographics/:id" => "patients#demographics"
  post "/search_results" => "patients#search_results"
  post "/update_patient" => "patients#update_patient"

  resources :patients
  resources :users
  
  root 'application#index'
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
