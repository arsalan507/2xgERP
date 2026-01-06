# 2XG Custom Dashboard

A full-stack dashboard application built with React, Express, TypeScript, and Supabase, designed to replicate the Zoho Inventory layout for 2XG Business Suite.

![Dashboard Preview](https://via.placeholder.com/800x400?text=2XG+Dashboard)

## Features

- **ERP Module**: Sales tracking, inventory management, and overdue amount monitoring
- **2XG Logistics**: Shipment and delivery tracking with detailed status breakdowns
- **2XG CARE**: Service ticket management with category-wise analytics
- **Sales Pipeline (CRM)**: Lead reporting and customer data management
- **Global Date Filtering**: All modules update simultaneously based on selected date range
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

## Tech Stack

### Backend
- Node.js + Express
- TypeScript
- Supabase (PostgreSQL)
- RESTful API Architecture

### Frontend
- React 18
- TypeScript
- Vite
- Tailwind CSS
- Recharts (for data visualization)
- Lucide React (for icons)
- Axios (HTTP client)

## Project Structure

```
2xg-dashboard/
├── backend/                 # Express API server
│   ├── src/
│   │   ├── config/         # Supabase configuration
│   │   ├── controllers/    # Route controllers
│   │   ├── routes/         # API routes
│   │   ├── services/       # Business logic
│   │   ├── types/          # TypeScript types
│   │   ├── utils/          # Database schema & seed data
│   │   └── server.ts       # Express app entry
│   └── package.json
│
└── frontend/               # React application
    ├── src/
    │   ├── components/     # React components
    │   │   ├── layout/    # Layout components (Sidebar, Header)
    │   │   ├── dashboard/ # Dashboard widgets
    │   │   ├── common/    # Shared components
    │   │   └── modules/   # Module-specific components
    │   ├── contexts/      # React Context (Date filtering)
    │   ├── services/      # API service layer
    │   ├── types/         # TypeScript types
    │   ├── App.tsx
    │   └── main.tsx
    └── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Supabase account (free tier works fine)
- Git

### Installation

#### 1. Clone the Repository

```bash
git clone <repository-url>
cd 2xg-dashboard
```

#### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```bash
cp .env.example .env
```

Edit `.env` and add your Supabase credentials:

```
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000

SUPABASE_URL=your_supabase_project_url
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

#### 3. Database Setup

1. Go to your Supabase project dashboard
2. Navigate to SQL Editor
3. Copy the contents of `backend/src/utils/database-schema.sql`
4. Execute the SQL to create all tables

#### 4. Seed the Database

```bash
npm run seed
```

This will populate your database with 6 months of realistic mock data.

#### 5. Frontend Setup

```bash
cd ../frontend
npm install
```

Create a `.env` file:

```bash
cp .env.example .env
```

The default configuration should work:

```
VITE_API_URL=http://localhost:5000/api
```

### Running the Application

#### Start Backend (Terminal 1)

```bash
cd backend
npm run dev
```

The API will run on [http://localhost:5000](http://localhost:5000)

#### Start Frontend (Terminal 2)

```bash
cd frontend
npm run dev
```

The app will open automatically at [http://localhost:3000](http://localhost:3000)

## API Documentation

### ERP Module
- `GET /api/erp/sales/total?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD`
- `GET /api/erp/sales/by-category?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD`
- `GET /api/erp/sales/overdue?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD`
- `GET /api/erp/inventory/hot-selling`
- `GET /api/erp/inventory/low-stock`

### Logistics Module
- `GET /api/logistics/shipments/summary?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD`
- `GET /api/logistics/deliveries/summary?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD`

### CARE Module
- `GET /api/care/tickets/total?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD`
- `GET /api/care/tickets/by-category?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD`

### CRM Module
- `GET /api/crm/leads/reporting?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD`
- `GET /api/crm/customers/list?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD`

## Key Features Explained

### Global Date Filtering

The dashboard uses React Context API to manage a global date range state. When you select a preset (Today, This Week, This Month, etc.), all modules automatically re-fetch their data with the new date range.

### Responsive Design

- **Mobile (<768px)**: Single column layout, stacked cards
- **Tablet (768-1024px)**: Two-column layout for cards
- **Desktop (>1024px)**: Three-column layout for optimal viewing

### Loading States

All modules display skeleton loaders while fetching data, providing a smooth user experience.

## Building for Production

### Backend

```bash
cd backend
npm run build
npm start
```

### Frontend

```bash
cd frontend
npm run build
npm run preview
```

## Deployment

### Recommended Setup

- **Frontend**: Deploy to Vercel (connects directly to your Git repo)
- **Backend**: Deploy to Railway or Render
- **Database**: Supabase (already cloud-hosted)

## Customization

### Adding New Modules

1. Create a new service in `backend/src/services/`
2. Create corresponding controller in `backend/src/controllers/`
3. Add routes in `backend/src/routes/`
4. Mount routes in `backend/src/server.ts`
5. Create frontend component in `frontend/src/components/modules/`
6. Add service methods in `frontend/src/services/`
7. Import and use in `frontend/src/App.tsx`

### Changing Colors

Edit `frontend/tailwind.config.js` to customize the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      'sidebar-dark': '#1e293b', // Change sidebar color
    }
  }
}
```

## Troubleshooting

### CORS Errors

Make sure `FRONTEND_URL` in backend `.env` matches your frontend URL.

### Database Connection Issues

Verify your `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` are correct.

### Port Already in Use

Change the `PORT` in backend `.env` or frontend `vite.config.ts`.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Support

For issues or questions, please open an issue on GitHub.

---

**Built with ❤️ for 2XG Business Suite**
