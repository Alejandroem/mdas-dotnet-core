using EasyWebSockets;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using VotingApp.Domain;

namespace VotingApp.Api
{
  public class Startup
  {
    public void ConfigureServices(IServiceCollection services)
    {
      services.AddSingleton(new Voting());
      services.AddMvc();
      services.AddEasyWebSockets();
    }

    public void Configure(IApplicationBuilder app)
    {
      app.UseDefaultFiles();
      app.UseStaticFiles();
      app.UseExceptionHandler();
      app.UseMvc();
      app.UseEasyWebSockets();
    }
  }
}
