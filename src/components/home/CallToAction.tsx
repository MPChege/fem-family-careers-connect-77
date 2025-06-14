
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, UserPlus, Briefcase } from "lucide-react";

export const CallToAction = () => {
  return (
    <section className="section-full bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-radial from-fem-gold/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-radial from-fem-terracotta/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container-modern section-padding relative z-10">
        
        {/* Main Content */}
        <div className="max-w-5xl mx-auto text-center space-y-16">
          
          {/* Header */}
          <div className="scroll-reveal space-y-8">
            <h2 className="text-section-title text-fem-navy tracking-tight leading-tight">
              Ready to Find Your Divine Purpose?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-fem-terracotta to-fem-gold mx-auto rounded-full"></div>
            <p className="text-body-large text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Join our thriving community of believers connecting meaningful work with businesses that share your values and faith journey.
            </p>
          </div>
          
          {/* Action Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 scroll-reveal" style={{ animationDelay: '0.3s' }}>
            
            {/* Job Seekers Card */}
            <div className="group relative">
              <div className="bg-white rounded-3xl p-12 shadow-sm hover-card-modern border border-gray-100/50 h-full">
                
                {/* Icon */}
                <div className="w-20 h-20 bg-gradient-to-r from-fem-terracotta to-fem-gold rounded-3xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <UserPlus className="w-10 h-10 text-white" />
                </div>
                
                {/* Content */}
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-mont font-semibold text-fem-navy">
                      For Job Seekers
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Discover opportunities that align with your faith and professional aspirations within our community network.
                    </p>
                  </div>
                  
                  <Link to="/register" className="block">
                    <Button className="w-full btn-modern text-lg py-6 rounded-2xl group-hover:scale-105 transition-all duration-300">
                      <div className="flex items-center justify-center gap-3">
                        <span>Create Your Profile</span>
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Employers Card */}
            <div className="group relative">
              <div className="bg-white rounded-3xl p-12 shadow-sm hover-card-modern border border-gray-100/50 h-full">
                
                {/* Icon */}
                <div className="w-20 h-20 bg-gradient-to-r from-fem-gold to-fem-terracotta rounded-3xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="w-10 h-10 text-white" />
                </div>
                
                {/* Content */}
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-mont font-semibold text-fem-navy">
                      For Employers
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Connect with talented individuals who share your values and commitment to faith-centered work environments.
                    </p>
                  </div>
                  
                  <Link to="/post-job" className="block">
                    <Button 
                      variant="outline" 
                      className="w-full text-lg py-6 rounded-2xl border-2 border-fem-terracotta text-fem-terracotta hover:bg-fem-terracotta hover:text-white group-hover:scale-105 transition-all duration-300"
                    >
                      <div className="flex items-center justify-center gap-3">
                        <span>Post an Opportunity</span>
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Message */}
          <div className="scroll-reveal pt-8" style={{ animationDelay: '0.6s' }}>
            <p className="text-gray-500 font-mont leading-relaxed">
              Join hundreds of faith-centered professionals already building meaningful connections in our community
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
