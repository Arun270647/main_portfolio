import { useState } from 'react';
import { Nav } from '../components/Nav';
import { SEOHead } from '../components/SEOHead';

type Snippet = { title: string; code: string };

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

function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button onClick={copy} aria-label="Copy code" style={{ padding: '10px 16px', borderRadius: 999, border: 0, cursor: 'pointer', background: copied ? 'var(--mint)' : 'var(--must)', color: 'var(--ink)', fontWeight: 700, fontSize: 13, boxShadow: '0 4px 0 var(--cream)' }}>
      {copied ? 'copied ✓' : 'copy'}
    </button>
  );
}

/** Utility page of copyable snippets. noindex; not linked from the nav. */
export default function Obs() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <SEOHead title="OBS | Arun Vignesh" description="Code snippets." path="/obs" noindex />
      <Nav shadow="var(--mint)" />
      <main id="main" style={{ position: 'relative', zIndex: 1, padding: '60px 20px 120px', maxWidth: 900, margin: '0 auto', display: 'grid', gap: 28 }}>
        <h1 className="display chrome-mint" style={{ margin: 0, fontSize: 'clamp(48px, 9vw, 120px)' }}>obs</h1>
        {snippets.map((s, i) => (
          <section key={s.title} style={{ background: 'var(--cream)', color: 'var(--ink)', borderRadius: 28, boxShadow: '0 10px 0 var(--mint)', overflow: 'hidden' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, padding: '18px 24px', borderBottom: '2px solid var(--ink)' }}>
              <h2 className="display" style={{ margin: 0, fontSize: 20, textTransform: 'none' }}>{i + 1}) {s.title}</h2>
              <CopyButton code={s.code} />
            </div>
            <pre style={{ margin: 0, padding: 24, overflowX: 'auto', fontFamily: 'var(--mono)', fontSize: 13, lineHeight: 1.5 }}><code>{s.code}</code></pre>
          </section>
        ))}
      </main>
    </div>
  );
}
