from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})



# Helper function for input validation
def get_input_data(required_fields):
    data = {}
    for field in required_fields:
        data[field] = request.form.get(field) or request.json.get(field)
        if not data[field]:
            return None, f"Missing required field: {field}"
    return data, None

# Mock function to generate a detailed fun math problem based on the provided inputs
def math_problem_generation(grade_level, math_topic, interest):
    return {
        "problem": f"As a {grade_level} student who loves {interest}, solve this fun {math_topic} problem: What is 5 x 4?",
        "hint": "Try multiplying the numbers to get the total!",
        "steps": [
            "Step 1: Understand the problem. We are multiplying 5 by 4.",
            "Step 2: Multiply the numbers: 5 x 4.",
            "Step 3: The result is 20."
        ],
        "answer": {
            "solution": "20",
            "explanation": "Multiplying 5 spaceships by 4 boosters gives 20 rocket boosters."
        },
        "difficulty": "Easy",
        "fun_fact": "Did you know? Multiplication is like adding the same number multiple times. 5 x 4 is the same as adding 5 four times: 5 + 5 + 5 + 5 = 20!",
        "motivational_message": "Keep practicing, and you'll become a math superstar in no time! 🌟"
    }

# API endpoint to generate a fun math problem
@app.route('/fun_maths', methods=['POST'])
def generate_fun_math_API():
    required_fields = ['grade_level', 'math_topic', 'interest']
    data, error = get_input_data(required_fields)

    if error:
        return jsonify({"error": error}), 400

    try:
        result = math_problem_generation(data['grade_level'], data['math_topic'], data['interest'])
        return jsonify(result), 200
    except Exception as e:
        return jsonify({"error": "An unexpected error occurred."}), 500


# Mock function to generate detailed rubric based on the grade level and assignment description
def generate_rubric(grade_level, assignment_description):
    return {
        "grade_level": grade_level,
        "assignment_description": assignment_description,
        "point_scale": ["Exceptional", "Excellent", "Very Good", "Good", "Fair", "Poor", "Needs Improvement"],
        "criteria": {
            "Content": {
                "Exceptional": "The content is comprehensive, accurate, and engages the reader. All key points are covered in great detail.",
                "Excellent": "Content is accurate and detailed, but may miss minor key points.",
                "Very Good": "Content is solid but lacks depth in some areas.",
                "Good": "Adequate content but missing key details.",
                "Fair": "Some content is present but lacks clarity and depth.",
                "Poor": "Content is unclear or incorrect.",
                "Needs Improvement": "Content is missing or lacks relevance."
            },
            "Organization": {
                "Exceptional": "The assignment is exceptionally well-organized with clear flow and logical structure.",
                "Excellent": "The organization is clear and logical, but a few transitions may be rough.",
                "Very Good": "Organization is solid but some areas could use better transitions or structure.",
                "Good": "Organized, but not as clear or logical in places.",
                "Fair": "Organization is weak with some confusing sections.",
                "Poor": "Lacks clear structure and organization.",
                "Needs Improvement": "No clear organization is present."
            },
            "Grammar": {
                "Exceptional": "Flawless grammar, punctuation, and spelling.",
                "Excellent": "Minor grammatical errors, but overall excellent.",
                "Very Good": "A few errors in grammar, but does not affect readability.",
                "Good": "Some noticeable grammar issues that affect clarity.",
                "Fair": "Frequent grammar issues that affect the understanding.",
                "Poor": "Many grammatical errors that interfere with readability.",
                "Needs Improvement": "Grammar errors make the text difficult to understand."
            }
        },
        "grading_method": "The assignment will be graded based on the above criteria using the point scale provided. The highest possible score is 'Exceptional'.",
        "feedback_note": "Students are encouraged to review each criterion to understand where improvements can be made. Feedback will be provided with specific suggestions."
    }

# API endpoint to generate a rubric for an assignment
@app.route('/generate_rubric', methods=['POST'])
def generate_rubric_API():
    required_fields = ['grade_level', 'assignment_description']
    data, error = get_input_data(required_fields)

    if error:
        return jsonify({"error": error}), 400

    try:
        rubric = generate_rubric(data['grade_level'], data['assignment_description'])
        return jsonify(rubric), 200
    except Exception as e:
        return jsonify({"error": "An unexpected error occurred."}), 500


# Mock function to generate the group-based project details
def generate_project(subject, grade, topic, learning_objective, group_size):
    return {
        "subject": subject,
        "grade_level": grade,
        "topic": topic,
        "learning_objective": learning_objective,
        "group_size": group_size,
        "roles": [
            {"role_name": "Researcher", "description": "Collect information about different organisms within an ecosystem."},
            {"role_name": "Recorder", "description": "Document the findings and organize the information collected by the researcher."},
            {"role_name": "Presenter", "description": "Prepare a presentation that explains the relationships between organisms in the ecosystem."},
            {"role_name": "Illustrator", "description": "Create diagrams or visual aids to support the presentation."}
        ],
        "tasks": [
            "Research different organisms in the chosen ecosystem.",
            "Document and organize the information.",
            "Prepare a presentation that explains the relationships in the ecosystem.",
            "Create visual aids that support the presentation."
        ],
        "instructions": {
            "overview": "Work together in your assigned roles to explore the relationships between organisms in an ecosystem. Use reliable sources for your research and ensure that your presentation is clear and informative.",
            "roles_contribution": "Each group member should contribute equally to the project by completing their assigned role responsibly.",
            "evaluation_criteria": "Your work will be evaluated based on the accuracy of the research, the organization of your findings, the clarity of the presentation, and the creativity of your visual aids.",
            "resources": "Use textbooks, online resources, or scientific journals for reliable information on ecosystems.",
            "deadline": "The final presentation should be completed and submitted by the end of the week."
        },
        "additional_notes": "Be sure to communicate with your team frequently to ensure everyone is on track. Collaboration is key!"
    }

# API endpoint to generate a group-based project
@app.route('/generate_project', methods=['POST'])
def generate_project_API():
    required_fields = ['subject', 'grade', 'topic', 'learning_objective', 'group_size']
    data, error = get_input_data(required_fields)

    if error:
        return jsonify({"error": error}), 400

    try:
        project_details = generate_project(data['subject'], data['grade'], data['topic'], data['learning_objective'], data['group_size'])
        return jsonify(project_details), 200
    except Exception as e:
        return jsonify({"error": "An unexpected error occurred."}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=True)

