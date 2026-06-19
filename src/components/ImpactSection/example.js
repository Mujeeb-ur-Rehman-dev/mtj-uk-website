// Example Usage
import ImpactSection from './ImpactSection';
import bgImage from '../../assets/img/impacts/background/background.png';

// Example cardsData array
const cardsData = [
  {
    icon: 'help', // or a direct import: import helpIcon from '../../assets/img/impacts/icons/help.svg';
    title: '100,000+',
    description: 'People helped during the floods in Pakistan'
  },
  {
    icon: 'medicine',
    title: '500,000+',
    description: 'Free tests and medicines provided'
  },
  {
    icon: 'clean-water',
    title: '350,000+',
    description: 'People given access to clean water'
  },
  {
    icon: 'scholarship',
    title: '10,000+',
    description: 'Scholarships gifted to students'
  },
  {
    icon: 'ration',
    title: '50,000+',
    description: 'Ration bags delivered'
  },
  {
    icon: 'women-trained',
    title: '600+',
    description: 'Women trained in income-generating skills'
  },
  {
    icon: 'orphan',
    title: '400',
    description: 'Orphans sponsored in Gaza'
  },
  {
    icon: 'help',
    title: '400,000+',
    description: 'People helped in Gaza'
  }
];

// Usage in a component
function ExampleComponent() {
  return (
    <div>
      <ImpactSection
        title="Our Work For Humanity"
        subtitle="The Impact of Your Donations"
        backgroundImage={bgImage}
        cards={cardsData}
      />
    </div>
  );
}

export default ExampleComponent;
