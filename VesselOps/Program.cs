using Microsoft.EntityFrameworkCore;
using VesselOps;

var builder = WebApplication.CreateBuilder(args);

// ==============================
// 1. Add Services to the Container
// ==============================

// A. Connect to SQL Server
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// B. Add CORS (Allows Angular to talk to this API)
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngular",
        policy => policy.WithOrigins("http://localhost:4200")
                        .AllowAnyMethod()
                        .AllowAnyHeader());
});

// C. Add Controllers (The API brain)
builder.Services.AddControllers();

// D. Add Swagger (The Documentation UI) - THESE WERE LIKELY MISSING/BROKEN
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// ==============================
// 2. Configure the HTTP Request Pipeline
// ==============================

// A. Enable Swagger (Make sure it runs in Development)
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// B. Enable Redirects and CORS
app.UseHttpsRedirection();
app.UseCors("AllowAngular");

// C. Map the Controllers
app.UseAuthorization();
app.MapControllers();

// D. Run the App
app.Run();