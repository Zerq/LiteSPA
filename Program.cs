using System.Runtime.CompilerServices;
using System.Text.Json;
using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Formatters.Xml;
using Microsoft.AspNetCore.StaticFiles;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.ObjectPool;

var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers()
   .AddJsonOptions(options =>
   {
      options.JsonSerializerOptions.PropertyNameCaseInsensitive = false;
      options.JsonSerializerOptions.PropertyNamingPolicy = null;
   });

builder.Services.AddCors();

var app = builder.Build();
app.UseHttpsRedirection();

app.UseCors(MyAllowSpecificOrigins);
app.UseRouting();
app.MapDefaultControllerRoute();
app.MapControllers();

app.UseDefaultFiles();

var extensionpProvider = new FileExtensionContentTypeProvider();
extensionpProvider.Mappings.Add(".tsx", "text/plain");

app.UseStaticFiles(new StaticFileOptions
{
   ServeUnknownFileTypes = true,
   ContentTypeProvider = extensionpProvider,
});


app.Run();