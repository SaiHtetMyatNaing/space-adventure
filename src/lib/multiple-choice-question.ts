type Question ={
    question: string,
    options: string[],
    correctAnswerIndex: number
}

export const multipleChoiceQuestion : Question[] = [
        {
            "question": "What is the smallest unit of life?",
            "options": [
                "Atom",
                "Cell",
                "Molecule"
            ],
            "correctAnswerIndex": 1
        },
        {
            "question": "Which planet is known as the Red Planet?", 
            "options": [
                "Jupiter",
                "Venus", 
                "Mars"
            ],
            "correctAnswerIndex": 2
        },
        {
            "question": "What is the chemical symbol for gold?",
            "options": [
                "Ag",
                "Au", 
                "Fe"
            ],
            "correctAnswerIndex": 1
        },
        {
            "question": "What is the largest organ in the human body?",
            "options": [
                "Heart", 
                "Brain",
                "Skin"
            ],
            "correctAnswerIndex": 2
        },
        {
            "question": "Which gas do plants absorb during photosynthesis?",
            "options": [
                "Oxygen",
                "Carbon Dioxide",
                "Nitrogen"
            ],
            "correctAnswerIndex": 1
        }
    ]
