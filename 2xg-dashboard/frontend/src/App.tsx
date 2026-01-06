import { DateFilterProvider } from './contexts/DateFilterContext';
import DashboardLayout from './components/layout/DashboardLayout';
import MainContent from './components/layout/MainContent';
import ERPModule from './components/modules/ERPModule';
import LogisticsModule from './components/modules/LogisticsModule';
import CAREModule from './components/modules/CAREModule';
import CRMModule from './components/modules/CRMModule';

function App() {
  return (
    <DateFilterProvider>
      <DashboardLayout>
        <MainContent>
          <ERPModule />
          <LogisticsModule />
          <CAREModule />
          <CRMModule />
        </MainContent>
      </DashboardLayout>
    </DateFilterProvider>
  );
}

export default App;
