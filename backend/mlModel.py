import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# Load the dataset
movies = pd.read_csv('./Movies1.csv')

# Step 1: Relevant Feature Selection
# Selecting relevant features for recommendation
features = ['genres', 'keywords', 'cast', 'director', 'overview', 'original_language']

# Step 2: Combining the Selected Features
# Filling any NaN values with an empty string and combining features into a single string
for feature in features:
    movies[feature] = movies[feature].fillna('')

# Function to combine the selected features into a single string
def combine_features(row):
    return ' '.join([row[feature] for feature in features])

# Create a new column in DataFrame to hold the combined features
movies["combined_features"] = movies.apply(combine_features, axis=1)

# Step 3: Vectorization using Feature Engineering
# Convert the combined features column into a matrix of token counts
vectorizer = CountVectorizer(stop_words='english')
feature_matrix = vectorizer.fit_transform(movies["combined_features"])

# Step 4: Cosine Similarity to get Similarity Score
# Compute cosine similarity between all movies based on the feature matrix
cosine_sim = cosine_similarity(feature_matrix)

# Step 5: Define a function to get movie recommendations based on specified criteria
def get_movie_recommendations(movie_title=None, filter_type=None, filter_value=None, cosine_sim=cosine_sim):
    # Check if we are using a filter type for recommendation
    if filter_type and filter_value:
        # Validate the filter type
        if filter_type not in features:
            print(f"Invalid filter type '{filter_type}'. Please choose from {features}.")
            return []

        filtered_movies = movies[movies[filter_type].str.contains(filter_value, case=False, na=False)]

        if filtered_movies.empty:
            print(f"No movies found with {filter_type} '{filter_value}'.")
            return []

        print(f"\nMovies with {filter_type} '{filter_value}':")
        return list(filtered_movies['title'].head(10))  # Limiting to top 10 for simplicity

    elif movie_title:
        try:
            movie_index = movies[movies.title.str.lower() == movie_title.lower()].index[0]
        except IndexError:
            print(f"Movie '{movie_title}' not found in the dataset.")
            return []

        # Get similarity scores for all movies with the input movie
        similarity_scores = list(enumerate(cosine_sim[movie_index]))

        # Sort movies based on similarity scores in descending order
        sorted_similar_movies = sorted(similarity_scores, key=lambda x: x[1], reverse=True)[1:]

        # Recommend the top 10 most similar movies
        print(f"\nMovies similar to '{movie_title}':")
        recommended_movies = []
        for i in range(10):
            movie_id = sorted_similar_movies[i][0]
            recommended_movies.append(movies['title'].iloc[movie_id])
        return recommended_movies
    else:
        print("Please specify either a movie title or a filter type and value.")
        return []

# # Step 6: Example usage of the recommendation function
# print("Choose a recommendation type:")
# print("1. Find similar movies by title")
# print("2. Filter movies by criteria (e.g., genre, director, cast)")

# choice = int(input("Enter your choice (1 or 2): "))

# if choice == 1:
#     movie_name = input("Enter a movie title: ")
#     recommendations = get_movie_recommendations(movie_title=movie_name)
#     print("\nRecommended Movies:")
#     print("\n".join(recommendations) if recommendations else "No recommendations found.")
# elif choice == 2:
#     print("\nSelect a filter type for recommendation:")
#     for i, feature in enumerate(features):
#         print(f"{i + 1}. {feature}")

#     filter_choice = int(input("\nEnter the number corresponding to the filter type: ")) - 1
#     if 0 <= filter_choice < len(features):
#         filter_type = features[filter_choice]
#         filter_value = input(f"Enter the desired {filter_type} (e.g., Action, Zack Snyder, Tom Hanks): ")
#         recommendations = get_movie_recommendations(filter_type=filter_type, filter_value=filter_value)
#         print("\nRecommended Movies:")
#         print("\n".join(recommendations) if recommendations else "No recommendations found.")
#     else:
#         print("Invalid choice. Please select a valid filter number.")
# else:
#     print("Invalid choice.")