import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Check, Copy } from "lucide-react";
import { CRTScreen } from "@/components/CRTScreen";

type Snippet = {
  title: string;
  code: string;
};

const snippets: Snippet[] = [
  {
    title: "Bayes' Rule",
    code: `P_Friday_and_Absent = 0.03
P_Friday = 0.20

# Applying Bayes' Rule
P_Absent_given_Friday = (
    P_Friday_and_Absent / P_Friday
)

print("Probability of student being absent given today is Friday:")
print(P_Absent_given_Friday)
print("Percentage =", P_Absent_given_Friday * 100, "%")`,
  },
  {
    title: "SQLite Student Database",
    code: `import sqlite3

# Connect to database
conn = sqlite3.connect("student.db")
cursor = conn.cursor()

# Create table
cursor.execute("""
CREATE TABLE IF NOT EXISTS student (
    id INTEGER PRIMARY KEY,
    name TEXT,
    marks INTEGER
)
""")

# Insert records
students = [
    (1, "Arun", 85),
    (2, "Divya", 90),
    (3, "Kiran", 78),
    (4, "Priya", 95),
    (5, "Rahul", 80)
]

cursor.execute("DELETE FROM student")
cursor.executemany(
    "INSERT INTO student VALUES (?, ?, ?)",
    students
)
conn.commit()

# Display all records
cursor.execute("SELECT * FROM student")
for row in cursor.fetchall():
    print(row)

# Display marks greater than 80
cursor.execute(
    "SELECT * FROM student WHERE marks > 80"
)
for row in cursor.fetchall():
    print(row)

conn.close()`,
  },
  {
    title: "Naive Bayes Text Classifier",
    code: `from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB

# Training text
text = [
    "I love this movie",
    "This is a great film",
    "I like this song",
    "I hate this movie",
    "This film is bad",
    "The song is terrible"
]

# Correct labels
label = [
    "Positive", "Positive", "Positive",
    "Negative", "Negative", "Negative"
]

# Convert text into numerical features
vectorizer = CountVectorizer()
X = vectorizer.fit_transform(text)

# Create and train model
model = MultinomialNB()
model.fit(X, label)

# Test sentence
test_text = ["I love this song"]
test = vectorizer.transform(test_text)

# Predict class
prediction = model.predict(test)
print("Test Sentence:", test_text[0])
print("Predicted Class:", prediction[0])`,
  },
  {
    title: "Linear Regression",
    code: `import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression

# Input: hours studied
X = np.array([[1], [2], [3], [4], [5]])

# Output: marks
y = np.array([35, 45, 50, 60, 70])

# Create and train model
model = LinearRegression()
model.fit(X, y)

# Predict marks for 6 hours
hours = [[6]]
prediction = model.predict(hours)

print("Slope (Coefficient):", model.coef_[0])
print("Intercept:", model.intercept_)
print("Predicted Marks for 6 hours:", prediction[0])

# Plot results
y_pred = model.predict(X)
plt.scatter(X, y, label="Actual Data")
plt.plot(X, y_pred, label="Regression Line")
plt.scatter(hours, prediction, label="Predicted Value")
plt.title("Linear Regression")
plt.xlabel("Hours Studied")
plt.ylabel("Marks")
plt.legend()
plt.show()`,
  },
  {
    title: "KNN",
    code: `from sklearn.neighbors import KNeighborsClassifier

# Training data
X = [[35], [45], [55], [65], [75], [85]]

# Labels
y = ["Fail", "Fail", "Pass", "Pass", "Pass", "Pass"]

# Create KNN model
model = KNeighborsClassifier(n_neighbors=3)

# Train model
model.fit(X, y)

# Student marks
mark = [[30]]

# Predict class
prediction = model.predict(mark)

# Predict probabilities
probability = model.predict_proba(mark)

print("Student Marks:", mark[0][0])
print("Predicted Result:", prediction[0])`,
  },
  {
    title: "Backpropagation",
    code: `import numpy as np
from sklearn.neural_network import MLPClassifier

# Input words
words = ["apple", "ant", "orange", "ball", "cat", "dog"]

# Convert first letter to numerical feature
X = np.array([
    [1] if word[0] in "aeiou" else [0]
    for word in words
])

# 1 = Vowel, 0 = Consonant
y = np.array([1, 1, 1, 0, 0, 0])

# Create neural network
model = MLPClassifier(
    hidden_layer_sizes=(5,),
    activation="logistic",
    solver="lbfgs",
    max_iter=1000,
    random_state=1
)

# Train model
model.fit(X, y)

# Test words
test_words = ["elephant", "table", "umbrella", "kite"]

print("Word Classification Results:")

for word in test_words:
    features = np.array([
        [1] if word[0] in "aeiou" else [0]
    ])

    result = model.predict(features)[0]

    if result == 1:
        print(word, "- Vowel Word")
    else:
        print(word, "- Consonant Word")`,
  },
  {
    title: "Find-S Algorithm",
    code: `data = [
    ['Sunny', 'Warm', 'Normal', 'Yes'],
    ['Sunny', 'Warm', 'High', 'Yes'],
    ['Rainy', 'Cold', 'High', 'No'],
    ['Sunny', 'Warm', 'High', 'Yes']
]

# Initialize hypothesis
hypothesis = data[0][:-1]

# Process positive examples
for row in data:
    if row[-1] == 'Yes':
        for i in range(len(hypothesis)):
            if hypothesis[i] != row[i]:
                hypothesis[i] = '?'

print("Final Hypothesis:", hypothesis)`,
  },
];

const CopyButton = ({ code }: { code: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="retro-btn flex items-center gap-2 font-terminal text-xs"
      aria-label="Copy code"
    >
      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
      {copied ? "COPIED" : "COPY"}
    </button>
  );
};

const Obs = () => (
  <>
    <Helmet>
      <title>OBS | Arun Vignesh</title>
      <meta name="robots" content="noindex, nofollow" />
    </Helmet>

    <CRTScreen className="min-h-screen relative">
      <div className="container mx-auto px-4 py-12 max-w-4xl space-y-8">
        <h1 className="font-terminal text-primary text-2xl md:text-3xl text-glow">OBS</h1>

        {snippets.map((snippet, index) => (
          <section key={snippet.title} className="terminal-window">
            <div className="flex items-center justify-between gap-4 p-4 border-b border-border">
              <h2 className="font-terminal text-primary text-sm md:text-base">
                {index + 1}) {snippet.title}
              </h2>
              <CopyButton code={snippet.code} />
            </div>
            <pre className="p-4 overflow-x-auto font-mono text-xs md:text-sm text-foreground whitespace-pre">
              <code>{snippet.code}</code>
            </pre>
          </section>
        ))}
      </div>
    </CRTScreen>
  </>
);

export default Obs;
