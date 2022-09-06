import React from 'react';
import bulkybook from '../assets/projects/BulkyBook.png';
import dashboard from '../assets/projects/ErvinDashboard.png';
import portfolio from '../assets/projects/ErvinPortfolio.png';
import portfolio2 from '../assets/projects/ErvinPortfolio2.png';
import SwaggerAPI from '../assets/projects/SwaggerAPI.png';
import mapty from '../assets/projects/Mapty.png';

export const projectList = [
    {
        id:1,
        image: bulkybook,
        title: 'BulkyBook',
        description: 'Project developed in .NET with CRUD operations, database manipulation and identity',
        github: 'https://github.com/ervintuzlic/BulkyBookComplete/',
        demo: 'Not Available'
    },
    {
        id:2,
        image: dashboard,
        title: 'ErvinDashboard',
        description: 'Dashboard built in React and with Syncfusion, detailed graphs and other apps',
        github: 'https://github.com/ervintuzlic/dashboard/',
        demo: 'https://ervin-dashboard.netlify.app'
    },
    {
        id:3,
        image: portfolio,
        title: 'ErvinPortfolio',
        description: 'First portfolio developed with ASP.NET with CRUD operations and project management',
        github: 'https://github.com/ervintuzlic/ErvinPortfolio/',
        demo: 'Not Available'
    },
    {
        id:4,
        image: portfolio2,
        title: 'ErvinPortfolio2',
        description: 'Latest project developed in React, fully frontend ready website',
        github: 'https://github.com/ervintuzlic/ervinportfoliotwo/',
        demo: 'Not Available'
    },
    {
        id:5,
        image: SwaggerAPI,
        title: 'ASP.NET React with API integration',
        description: 'ASP.NET project built with React and included API integrations',
        github: 'https://github.com/ervintuzlic/AspNetReactProject/',
        demo: 'Not Available'
    },
    {
        id:6,
        image: mapty,
        title: 'Mapty (In Progress)',
        description: 'Project that is planned to be developed in the near future',
        github: 'https://github.com/ervintuzlic/',
        demo: 'Not Available'
    }
];