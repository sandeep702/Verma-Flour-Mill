import { SignUp } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <SignUp
        appearance={{
          elements: {
            rootBox: 'w-full max-w-md mx-auto',
            card: 'shadow-lg border border-gray-200 rounded-lg',
            headerTitle: 'text-2xl font-bold text-gray-900',
            headerSubtitle: 'text-gray-600',
            socialButtonsBlockButton: 'border-gray-300 hover:bg-gray-50',
            formFieldInput: 'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
            formButtonPrimary: 'bg-blue-600 hover:bg-blue-700 text-white',
            footerActionText: 'text-gray-600',
            footerActionLink: 'text-blue-600 hover:text-blue-800'
          },
          layout: {
            socialButtonsPlacement: 'bottom',
            socialButtonsVariant: 'blockButton',
            showOptionalFields: false
          },
          variables: {
            colorPrimary: '#2563eb'
          }
        }}
        redirectUrl={window.location.origin}
        afterSignUpUrl={window.location.origin}
      />
    </div>
  );
};

export default SignUpPage;