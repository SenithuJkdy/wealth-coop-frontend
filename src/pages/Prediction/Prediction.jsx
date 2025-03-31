import { useNavigate } from 'react-router-dom';

const predictions = [
  { 
    title: "Loan Default Prediction", 
    path: "loan-default",
    description: "Predict the likelihood of loan default based on applicant details"
  },
  { 
    title: "Loan Repayment Prediction", 
    path: "repayment",
    description: "Forecast repayment timelines and probabilities"
  },
  { 
    title: "Loan Amount Forecast", 
    path: "amount-forecast",
    description: "Estimate optimal loan amounts for applicants"
  },
];

export default function Predictions() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-stretch justify-start p-6">
      <h1 className="text-2xl font-semibold mb-6">Predictive Analytics & Insights</h1>
      <div className="grid grid-cols-3 gap-4">
        {predictions.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(`/predictions/${item.path}`)}
            className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all cursor-pointer group"
          >
            <h3 className="text-lg font-medium mb-2">{item.title}</h3>
            <p className="text-sm opacity-80 group-hover:opacity-100">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}