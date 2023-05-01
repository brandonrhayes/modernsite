import { useEffect } from 'react';

const LinkedInBadge = () => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
        <div 
            class="badge-base LI-profile-badge" 
            data-locale="en_US" 
            data-size="large" 
            data-theme="dark" 
            data-type="HORIZONTAL" 
            data-vanity="brandonrhayes" 
            data-version="v1"
        >
            <a 
                class="badge-base__link LI-simple-link" 
                href="https://ca.linkedin.com/in/brandonrhayes?trk=profile-badge"
            >Brandon Hayes
            </a>
        </div>
    </div>
  );
}

export default LinkedInBadge;
