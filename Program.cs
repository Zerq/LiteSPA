using System.Runtime.CompilerServices;
using System.Text.Json;
using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Formatters.Xml;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.ObjectPool;

public class Program
{
   public static void Main(params string[] args)
   {
      if (args.Length > 0){
         TsxFix.Run(args);
      }
      else{
         WebApp.Run();
      }
   }

}
